@extends('app')

@section('title', 'Edit Instructor')


@section('content')
<h1>Edit Instructors</h1>
   <form action="{{ route('instructors.update', $instructor) }}" method="POST" enctype="multipart/form-data"> 
    @method('PUT')
    @include('_form')
   </form>
@endsection   

 