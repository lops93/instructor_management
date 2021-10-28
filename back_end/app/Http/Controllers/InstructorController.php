<?php

namespace App\Http\Controllers;

use App\Models\Instructor;
use Illuminate\Http\Request;

class InstructorController extends Controller
{
    /* Show the instructors*/
    public function index(){
        $instructors = Instructor::get();
        return view('index', ['instructors'=>$instructors]);
    }

    public function create(){
         /* Show the view with create form*/
        return view('create');
    }

    public function store(Request $request){
         /* save the instructors in a database*/
        //dd($request->all());
        $data = $request->except('_token');
        $data['picture'] = $request->picture->store('public');

        $data['doc'] = str_replace(['.','-'], '', $data['doc']);
        $data['phone_number'] = str_replace(['(', ')',' ', '-'], '', $data['phone_number']);

        Instructor::create($data);
        return redirect()->route('instructors.index');
    }

    public function edit(int $id){
         /* Show the view with edit page*/
        //dd($id);
        $instructor = Instructor::findOrFail($id);

        return view('edit', [
            'instructor' => $instructor
        ]);
    }

    public function update(int $id, Request $request){
         /* update a instructor*/
        $instructor = Instructor::findOrFail($id);

        $data = $request->except('_token', '_method');

        $data['doc'] = str_replace(['.','-'], '', $data['doc']);
        $data['phone_number'] = str_replace(['(', ')',' ', '-'], '', $data['phone_number']);

        if($request->hasFile('picture')){
            $data['picture'] = $request->picture->store('public');
        }

        $instructor->update($data);
        return redirect()->route('instructors.index');
    }

    public function destroy(int $id){
         /* delete a instructor*/
         $instructor = Instructor::findOrFail($id);

         $instructor->delete();

         return redirect()->route('instructors.index');
    }
}
