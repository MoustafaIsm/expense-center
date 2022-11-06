<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('
        CREATE PROCEDURE reset (year INT, month INT)
        BEGIN
            DECLARE finished INTEGER DEFAULT 0;
            DECLARE my_id INT ;
            DECLARE my_income double;
            DECLARE my_outcome double;
            DECLARE usersCursor CURSOR FOR
                SELECT id, income, outcome FROM users;

            DECLARE CONTINUE HANDLER
                FOR NOT FOUND SET finished = 1;

            OPEN usersCursor;
            getData: LOOP

                FETCH usersCursor INTO my_id, my_income, my_outcome;

                IF finished = 1 THEN
                    LEAVE getData;
                END IF;

                INSERT INTO `histories`(`year`, `month`, `income`, `outcome`, `user_id`)
                VALUES (year, month, my_income, my_outcome, my_id);

                UPDATE `users` SET `income`=0,`outcome`=0 WHERE id=my_id;

            END LOOP getData;
            CLOSE usersCursor;
        END
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('procedure');
    }
};
