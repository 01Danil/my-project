/*
import React from "react";
import { FaStar } from "react-icons/fa";
import StarRating from './react-icons';
export default function StarRating() {
  return [
    <FaStar color="red" />,
    <FaStar color="red" />,
    <FaStar color="red" />,
    <FaStar color="grey" />,
    <FaStar color="grey" />,
  ];
}

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
	return createArray(totalStars).map((n, i) => <Star key={i} />);
	}
*/

import { useState } from "react";

/*
import React, { useState } from "react";
import { FaStar } from "react-icon/fa";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars] = useState(3);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
*/

/*
const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);
*/

/*
export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
*/

/*
export default function App() {
  return <StarRating style={{ backgroundColor: "lightblue" }} />;
}
*/

/*
export default function StarRating({ style = {}, total = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: "5px", ...style }}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
*/

/*
export default function App() {
  return (
    <StarRating
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={(e) => alert("double click")}
    />
  );
}
*/

/*
export default function StarRating({ style = {}, totalStars = 5, ...props }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: 5, ...style }} {...props}>
      ...
    </div>
  );
}
*/

[
	{
		"id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
		"title": "ocean at dusk",
		"color": "#00c4e2",
		"rating": 5
	},
	{
		"id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
		"title": "lawn",
		"color": "#26ac56",
		"rating": 3,
	},
	{
		"id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
		"title": "bright red",
		"color": "#ff0000",
		"rating": 0,
	}
]