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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->date('date_of_birth');
            $table->string('gender');
            $table->string('profile_picture_url');
            $table->string('relationship_status');
            $table->integer('nbr_of_children');
            $table->integer('nbr_of_clicks')->default(0);
            $table->string('education_feild')->default('NA');
            $table->string('work_feild')->default('NA');
            $table->string('job_title')->default('NA');
            $table->double('yearly_salary')->default(0);
            $table->double('income')->default(0);
            $table->double('outcome')->default(0);
            $table->boolean('chat_enabled')->default(true);
            $table->integer('role_id')->references('id')->on('roles');
            $table->integer('living_location_id')->references('id')->on('locations');
            $table->integer('email_verification_id')->references('id')->on('email_verifications');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
