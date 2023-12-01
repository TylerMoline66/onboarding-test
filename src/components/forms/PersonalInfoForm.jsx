import { useState } from "react";

import { useUserContext } from "../context/UserContext";
import Button from "../custom components/button";

export default function PersonalInfoForm() {
  const {
    userStoreName,
    setUserStoreName,
    fullName,
    setFullName,
    email,
    setEmail,
    storeUrl,
    setStoreUrl,
    history,
  } = useUserContext();

  const handleNextClick = () => {
    history.push("/orders");
  };

  return (
    <div className="form-wrapper">
      <div className="input-group">
        <label htmlFor="store-name">
          Store Name<span>*</span>
        </label>
        <input
          type="text"
          name="store-name"
          id="store-name"
          value={userStoreName}
          onChange={(e) => setUserStoreName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="full-name">
          Full Name<span>*</span>
        </label>
        <input
          type="text"
          name="full-name"
          id="full-name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="email">
          Email Address<span>*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="store-url">
          Store URL<span>*</span>
        </label>
        <input
          type="text"
          name="store-url"
          id="store-url"
          value={storeUrl}
          onChange={(e) => setStoreUrl(e.target.value)}
        />
      </div>

      <Button
        disabled={
          !userStoreName.trim() ||
          !fullName.trim() ||
          !email.trim() ||
          !storeUrl.trim()
        }
        onClick={handleNextClick}
      >
        Confirm
      </Button>
    </div>
  );
}
