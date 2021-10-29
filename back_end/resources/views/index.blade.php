@extends('app')

@section('title', 'Initial Page')


@section('content')
         <h1>Instructors</h1>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Course</th>
      <th scope="col">actions</th>
    </tr>
  </thead>
  <tbody>
      @forelse ($instructors as $instructor)
    <tr>
      <th scope="row">{{ $instructor->id}}</th>
      <td>{{ $instructor->fullname}}</td>
      <td>{{ $instructor->course}}</td>
      <td><a href="{{ route('instructors.edit', $instructor) }}" class="btn btn-primary">edit</a>
      <a href="{{ route('instructors.destroy', $instructor) }}" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete?')">delete</a></td>
    </tr>
    @empty
    <tr>
      <th scope="col"></th>
      <td>Nothing Found</td>
      <td></td>
      <td></td>
    </tr>
    @endforelse
    <tr>
  </tbody>
</table>
<a href="{{ route('instructors.create') }}" class="btn btn-success">Add Instructor</a>

@endsection   

 