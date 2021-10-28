@extends('app')

@section('title', 'Create Instructor')


@section('content')
  <h1>Add Instructors</h1>
   <form action="{{ route('instructors.store') }}" method="POST" enctype="multipart/form-data"> 
    @include('_form')
   </form>
@endsection   
