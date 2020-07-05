<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Employee;
use DB;
use Image;


class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $employee=Employee::all();
       return response()->json($employee);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|unique:employees|max:25',
            'email' => 'required',
            'phone' => 'required|unique:employees|max:13',   
        ]);
       
        if($request->photo)
        {
            $position=strpos( $request->photo, ';');
            $sub=substr($request->photo, 0 , $position);
            $ext=explode('/' ,$sub)[1];
            //return $ext;
            $name=time().".".$ext;
            $img=Image::make($request->photo)->resize(240,200);
            

            $upload_path='backend/employee/';
            $img_url= $upload_path.$name;
            $img->save($img_url);

            $employee=new Employee();
            $employee->name=$request->name;
            $employee->email=$request->email;
            $employee->phone=$request->phone;
            $employee->address=$request->address;
            $employee->salary=$request->salary;
            $employee->nid=$request->nid;
            $employee->joining_date=$request->joining_date;
            $employee->photo=$img_url;
            $employee->save();


        }
        else
        {
            $employee=new Employee();
            $employee->name=$request->name;
            $employee->email=$request->email;
            $employee->phone=$request->phone;
            $employee->address=$request->address;
            $employee->salary=$request->salary;
            $employee->nid=$request->nid;
            $employee->joining_date=$request->joining_date;
            $employee->photo=$request-> $img_url;
            $employee->save();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
