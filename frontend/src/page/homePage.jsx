import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import RateLimitedUI from "../components/rateLimitedUI";

const homePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes")
        console.log(res.data)
        setNotes(res.data)
        setIsRateLimited(false)
      } catch (error) {
        if(error.response?.status === 429){
          setIsRateLimited(true)
        } else {
          toast.error("Failed to load notes")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchNote()
  }, [])
  return (
    <div>
      <NavBar />

      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default homePage;
