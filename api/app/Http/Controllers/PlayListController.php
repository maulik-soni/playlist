<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;

class PlayListController extends Controller
{
    public function addtrack(){
        $data = Request::all();
        \DB::table('playlist_songs')->insert(['song_data' => json_encode($data)]);
    }

    public function gettracklist(){
        $data = \DB::table('playlist_songs')->select(['id','song_data'])->get();        
        foreach ($data as $d ) {
            $res[] = $d->song_data;            
        }
        foreach ($data as $i ) {
            $res1[] = $i->id;            
        } 
        $res[] = $res1;
        return $res;
    }
}