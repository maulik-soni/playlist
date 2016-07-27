<?php

namespace App\Http\Controllers;

use App\User;
use \App\Playlist_Generes;
use \App\Playlist_Songs;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;

class PlayListController extends Controller
{
    public function addtrack(){
        $data = Request::all();
        \App\Playlist_Songs::insert([
            'song_name' => $data['songname'],
            'song_genere' => $data['genere'],
            'song_ratings' => $data['rating']
        ]);
    }

    public function gettracklist(){
        $data = \App\Playlist_Songs::select(array('id','song_name','song_genere','song_ratings'))->get();        
        return $data;
    }

    public function addgenere(){
        $data = Request::all();
        \App\Playlist_Generes::insert([
            'song_genres' => $data['generename']
        ]);
    }

    public function getgeneres(){
        // $data = \DB::table('playlist_genres')->select(['id','song_genres'])->get();  
        $data = \App\Playlist_Generes::select(array('id','song_genres'))->get()->toJson();  

        return $data;      
    }

    public function editedtrack(){
        $data = Request::all();   
        \App\Playlist_Songs::where("id",$data['songid'])->update([
            'song_name' => $data['songname'],
            'song_genere' => $data['genere'],
            'song_ratings' => $data['rating']
        ]);
    }

    public function delgenere(){
        $data = Request::all(); 
        \App\Playlist_Generes::where('song_genres', '=', $data['generename'])->delete();
    }
}