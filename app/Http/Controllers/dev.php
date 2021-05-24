<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class dev extends Controller
{   
    public function home(){
        return view('welcome');
    }

    public function list(){
        $db = DB::table('list')->get();
        return response()->json($db);

    }
    public function delete_list($id){
        
        DB::table('list')->where('id',$id)->delete();
        return response()->json($id);
        
    }
    
}
