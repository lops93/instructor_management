<?php

namespace App\Http\Controllers;

use App\Models\Instructor;
use Illuminate\Http\Request;

class SearchInstructorbycourse extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $course = $request->course;

        if ($course === false){
            return response()->json(['erro'=>'error']);
        }
           
        return [
           'instructors' => Instructor::searchByCourse($course),
           'qty_instructors' => Instructor::qtyByCourse($course)
        ];
    }
}
