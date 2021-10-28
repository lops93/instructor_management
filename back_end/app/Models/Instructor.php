<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Mockery\Matcher\Type;

class Instructor extends Model
{
    use HasFactory;

    /* fields to be inserted in DB */
    protected $fillable = ['fullname', 'doc', 'email', 'phone_number', 'course','country','picture'];

    /* fields that will appear */
    protected $visible = ['fullname', 'course', 'picture', 'rating'];

    /* fictional field*/
    protected $appends = ['rating'];

    /* get the user picture */
    public function getPictureAttribute(string $value){
        return config('app.url') . '/' . $value;
    }

    /* get the user rating */
     public function getRatingAttribute($value){
        return mt_rand(1, 5);
    }
 
    /* Search Instructor by Course */
    static public function searchByCourse(string $course){
        return self::where('course', $course)->limit(6)->get();  //self = instructor
    }

    static public function qtyByCourse(string $course){
        $qty = self::where('course', $course)->limit(6)->count();  //self = instructor
        return $qty >6 ? $qty - 6 : 0;
    }
}
