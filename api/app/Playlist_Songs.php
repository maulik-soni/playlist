<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Playlist_Songs extends Model
{
    //
    public $timestamps = false;
    protected $table = 'playlist_songs';
    protected $fillable = ['song_name','song_genere','song_ratings'];
}
