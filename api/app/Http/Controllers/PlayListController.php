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
        \DB::table('playlist_songs')->insert([
            'song_name' => $data['songname'],
            'song_genere' => $data['genere'],
            'song_ratings' => $data['rating']
        ]);
    }

    public function gettracklist(){
        $data = \DB::table('playlist_songs')->select(['id','song_name','song_genere','song_ratings'])->get();        
        return $data;
    }

    public function addgenere(){
        $data = Request::all();
        \DB::table('playlist_genres')->insert([
            'song_genres' => $data['generename']
        ]);
    }

    public function getgeneres(){
        $data = \DB::table('playlist_genres')->select(['id','song_genres'])->get();  
        return $data;      
    }

    public function editedtrack(){
        $data = Request::all();   
        \DB::table('playlist_songs')->where("id",$data['songid'])->update([
            'song_name' => $data['songname'],
            'song_genere' => $data['genere'],
            'song_ratings' => $data['rating']
        ]);
    }

    public function delgenere(){
        $data = Request::all(); 
        DB::table('playlist_genres')->where('song_genres', '=', $data['generename'])->delete();
    }
}