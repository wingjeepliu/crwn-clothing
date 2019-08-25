import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-time.component";
// import CollectionItem
export default function CollectionPreview({ title, items }) {
  console.log(items);

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemPros }) => (
            <CollectionItem key={id} {...otherItemPros} />
          ))}
      </div>
    </div>
  );
}
