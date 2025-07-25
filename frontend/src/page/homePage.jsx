import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import RateLimitedUI from "../components/rateLimitedUI";
import NoteCard from "../components/noteCard";
import api from "../lib/axios";
import toast from "react-hot-toast";

const homePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get("/notes")
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
    <div className="min-h-screen">
      <NavBar />
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-6"> 
            {notes.map(note => (
              <div key={note._id}>
                <NoteCard note={note}/>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default homePage;
