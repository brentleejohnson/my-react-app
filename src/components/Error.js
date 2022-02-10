import React from "react";

export default function Error() {
  if (this.state.hasError) {
    return <h1>Something went wrong</h1>;
  }
  return <h1>Working</h1>;
}
