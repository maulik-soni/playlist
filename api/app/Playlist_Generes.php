<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Playlist_Generes extends Model
{
    //
    public $timestamps = false;
    protected $table = 'playlist_genres';
    protected $fillable = ['song_generes'];
}
