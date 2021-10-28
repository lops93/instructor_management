     @csrf
 <!--FullName-->
      <div class="mb-3">
        <label  for="fullname" class="form-label">Full Name</label>
        <input value="{{ @$instructor->fullname }}" type="text" class="form-control" id="fullname" name="fullname" required maxlength="100">
      </div>
      <!--Doc-->
      <div class="mb-3">
        <label for="doc" class="form-label">Document</label>
        <input value="{{ @$instructor->doc }}" type="text" class="form-control" id="doc" name="doc" required maxlength="11">
      </div>
      <!--Email-->
      <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <input value="{{ @$instructor->email }}" type="email" class="form-control" id="email" name="email" required maxlength="100">
      </div>
      <!--Phone Number-->
      <div class="mb-3">
        <label for="phone_number" class="form-label">Phone Number</label>
        <input value="{{ @$instructor->phone_number }}" type="text" class="form-control" id="phone_number" name="phone_number" required maxlength="11">
      </div>
      <!--Course-->
      <div class="mb-3">
        <label for="course" class="form-label">Course</label>
        <input value="{{ @$instructor->course }}" type="text" class="form-control" id="course" name="course" required maxlength="100">
      </div>
      <!--Country-->
      <div class="mb-3">
        <label for="country" class="form-label">Country</label>
        <input value="{{ @$instructor->country }}" type="text" class="form-control" id="country" name="country" required maxlength="50">
      </div>
      <!--User Picture-->
      <div class="mb-3">
        <label for="picture" class="form-label">User Picture</label>
        <input value="{{ @$instructor->picture }}" type="file" class="form-control" id="picture" name="picture">
      </div>
      <button type="submit" class="btn btn-primary">Save</button>