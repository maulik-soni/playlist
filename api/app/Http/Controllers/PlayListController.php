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
        $song = new \App\Playlist_Songs;
        $song->song_name = $data['songname'];
        $song->song_genere = $data['genere'];
        $song->song_ratings = $data['rating'];
        $song->save();
    }

    public function gettracklist(){
        $data = \App\Playlist_Songs::all();
        return $data;
    }

    public function addgenere(){
        $data = Request::all();        
        $genere = new \App\Playlist_Generes;
        $genere->song_genres = $data['generename'];
        $genere->save();
    }

    public function getgeneres(){
        $data = \App\Playlist_Generes::all();  
        return $data;      
    }

    public function editedtrack(){
        $data = Request::all();
        $editsong = \App\Playlist_Songs::find($data['songid']);
        $editsong->song_name = $data['songname'];
        $editsong->song_genere = $data['genere'];
        $editsong->song_ratings = $data['rating'];
        $editsong->save();
    }

    public function delgenere(){
        $data = Request::all(); 
        \App\Playlist_Generes::where('song_genres', '=', $data['generename'])->delete();
    }
}