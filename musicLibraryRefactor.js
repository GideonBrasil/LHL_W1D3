var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
             printPlaylists: function () {
                // look through the playlists in Library
                for (const playlistID in library.playlists) {
                  // store the playlists somewhere
                  const selectedPlaylist = library.playlists[playlistID];
                  // output all the playlists with ids, names and # tracks
                  console.log(selectedPlaylist.id + ': ' + selectedPlaylist.name + ' - ' + selectedPlaylist.tracks.length + " tracks");
                }
              },
              printTracks: function () {
                // look through the tracks in library
                for (const navTracks in library.tracks) {
                  // store the tracks from library in a variable
                  const selectedTracks = library.tracks[navTracks];
                  // output all the tracks with the id, name, artist and album
                  console.log(selectedTracks.id + ': ' + selectedTracks.name + ' by ' + selectedTracks.artist + ' (' + selectedTracks.album + ')');
                }
              },
              printPlaylist: function (playlistId) {
                // store the slected playlist in library
                const storePlaylist = library.playlists[playlistId];
                // output playlist id, name, # tracks
                console.log(storePlaylist.id + ': ' + storePlaylist.name + ' - ' + storePlaylist.tracks.length + " tracks");
                // access the tracks in the previously stored playlist
                for (const storedTracks in storePlaylist.tracks) {
                  // store the tracks from the selected playlist
                  const selectedTracks = library.tracks[storePlaylist.tracks[storedTracks]];
                  // output the tracks with id, name, artist and album
                  console.log(selectedTracks.id + ': ' + selectedTracks.name + ' by ' + selectedTracks.artist + ' (' + selectedTracks.album + ')');
                }
              },
              addTrackToPlaylist: function (trackId, playlistId) {
                // store playlist ID 
                var existingPlaylist = library.playlists[playlistId];
                // add selected track to a stored playlist
                existingPlaylist.tracks.push(trackId);
              },
              uid: function(string) {
                // convert string to int
                var int = parseInt(string);
                return '0' + Math.floor(int);
              },
              addTrack: function (name, artist, album) {
                //store tracks in variable
                var track = library.tracks;
                // create a new ID for the new track
                var newTrackID = 't' + library.uid('04');
                // add the newly created trackID, a name, artist and album  
                track[newTrackID] = {
                  id: newTrackID,
                  name: name,
                  artist: artist,
                  album: album
                }
                 //console.log(track[newTrackID]);
              },

              addPlaylist: function (name) {
                const playList = library.playlists;
                const newPlID = 'p' + library.uid('03');
  
                playList[newPlID] = {
                  id: newPlID,
                  name: name,
                  tracks: ('t01' + ' ' + 't02' + ' ' + 't03')
                }
                console.log(playList[newPlID]);
              }
};

// console.log(library.printPlaylists());
// console.log(library.printTracks());
// console.log(library.printPlaylist("p02"));
// library.addTrackToPlaylist('t03', 'p01');
// console.log(library.playlists.p01);
// library.addTrack('AOT', 'Hajime Isayama', 'Beyond the Ocean');
library.addPlaylist('Titan');

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}