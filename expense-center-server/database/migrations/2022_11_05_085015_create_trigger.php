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
        CREATE TRIGGER `receipts_after_insert` AFTER INSERT ON `receipts` FOR EACH ROW
        BEGIN
            IF (NEW.type = \'income\') THEN
                UPDATE `users`
                SET income = income + NEW.amount
                WHERE `users`.`id`=NEW.user_id;
            ELSE
                UPDATE `users`
                SET outcome = outcome + NEW.amount
                WHERE id=NEW.user_id;
            END IF;
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
        Schema::dropIfExists('receipts_after_insert');
    }
};
