import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { usePlayerContext } from "../Context/PlayerContext";
import { ImageFetch } from "../Utils/Helper";
import ListItemButton from "@mui/material/ListItemButton";
const SingleSongList = ({
  id,
  name,
  primaryArtists,
  duration,
  index,
  image,
  albumName = null,
  title,
}) => {
  const { singleSong } = usePlayerContext();

  return (
    <ListItemButton
      sx={[
        {
          display: "grid",
          borderRadius: 2,
          gridTemplateColumns: "max-content 1fr max-content",
          overflow: "hidden",
        },
        (theme) => ({
          "&:hover": {
            backgroundColor: "#1d242ca3",
          },
        }),
      ]}
      data-id={id}
      className="grid relative overflow-hidden gap-3 cursor-pointer  items-center px-5 max-md:px-3"
      onClick={() => singleSong(id)}
    >
      <img
        src={image[1].link}
        className="w-14 rounded-lg object-cover"
        alt={name}
      />
      <div className="ml-4 overflow-hidden ">
        <h3
          className="text-slate-200 text-sm whitespace-nowrap text-ellipsis overflow-hidden w-[90%]"
          dangerouslySetInnerHTML={{
            __html: `${name || title}`,
          }}
        />

        <p className="text-xs max-md:text-[11px]  opacity-90 mt-[2px] max-w-xs max-md:max-w-[70%] overflow-hidden whitespace-nowrap text-ellipsis text-darkTextColor tracking-wide">
          {primaryArtists}
        </p>
      </div>

      <div className="mr-20 max-md:mr-2">
        {duration && (
          <div className="text-slate-200 text-sm opacity-70">
            {Math.floor(duration / 60)}:00
          </div>
        )}
        {albumName && (
          <div className="text-slate-200 text-xs opacity-70 absolute left-1/2 max-sm:left-3/4">
            {albumName}
          </div>
        )}
      </div>
    </ListItemButton>
  );
};

export default SingleSongList;
