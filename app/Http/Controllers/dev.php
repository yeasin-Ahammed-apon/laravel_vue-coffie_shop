<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class dev extends Controller
{   
    public function home(){
        return view('welcome');
    }
    public function all_data(){
        $data=DB::table('coffies')->get();
        return response()->json($data);

    }
    public function cake_info(Request $request, $id){
        
        $a=DB::table('coffies')->where('id',$id)->first();
        return response()->json($a);

    }
}
