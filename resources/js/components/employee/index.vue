 <template>
      <div>
        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">All Employee</li>
        </ol>
        <!-- Icon Cards-->
       <div class="row card container">
          <div class="card-header">
            <i class="fas fa-chart-area"></i>
            Employee Insert 
            <router-link to="/create" class="btn btn-sm btn-info" id="add_new"> Add New</router-link>
          </div>
          <div class="card-body">
          
          <div class="card-body">
              <div class="table-responsive">
                <label>Search</label>
               <input type="text"  class="form-control" style="width:200px; "><br>
                <table class="table table-bordered" id="" width="100%" cellspacing="0">

                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Photo</th>
                      <th>Phone</th>
                      <th>Salary</th>
                      <th>Joining date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                
                  <tbody>

                    <tr >
                      <td>text</td>
                      <td><img src="" id="em_photo"></td>
                      <td>text</td>
                      <td>text</td>
                      <td>text</td>
                      <td>
                        <router-link to="" class="btn btn-sm btn-info">Edit</router-link>
                        <a @click="deleteEmployee()" class="btn btn-sm btn-danger">Delete</a>
                      </td>
                    </tr>
        
                   </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
       </div>
   </div>
</template>

<script>

    export default {
    mounted(){
            if (!User.loggedIn()) {
               this.$router.push({ name:'/' })
            } 
        },
        	
    }



  
</script>

<style>
	


</style>
