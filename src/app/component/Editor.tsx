"use client";

import { Tldraw } from "@tldraw/tldraw";

export default function Editor() {
  return (
    <div
      className="
      position: fixed
    top: 0px
    left: 0px
    bottom: 0px
    right: 0px
    width: 100%
    height: 100%
    overflow: hidden"
    >
      <Tldraw />
    </div>
  );
}
