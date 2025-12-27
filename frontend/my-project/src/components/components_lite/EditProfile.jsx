import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/Redux/authslice";

function EditProfile({ open, opened }) {
  const [loading, setloading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.bio,
    skills: user?.profile?.skills?.join(", ") || "",
    file: user?.profile?.resume,
  });
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handlerFileChange = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.fullname);
    formData.append("email", input.email);
    formData.append("phone", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setloading(true);
      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser({ ...res.data.user, skills: input.skills }));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to Upload");
    } finally {
      setloading(false);
    }
    opened(false);
    console.log(input);
  };
  const FileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };
  return (
    <div>
      <Dialog open={open}>
        <DialogContent onInteractOutside={() => opened(false)}>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <form onSubmit={handlerFileChange}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <input
                    type="text"
                    id="name"
                    value={input.fullname}
                    onChange={changeEventHandler}
                    name="name"
                    className="w-full border border-gray-700 rounded-2xl col-span-3"
                  />
                </div>
              </div>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    email
                  </Label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={changeEventHandler}
                    className="w-full border border-gray-700 rounded-2xl col-span-3"
                  />
                </div>

                <div className="grid  gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phone" className="text-right">
                      Phone
                    </Label>
                    <input
                      type="tel"
                      id="phone"
                      value={input.phoneNumber}
                      onChange={changeEventHandler}
                      name="phone"
                      className="w-full border border-gray-700 rounded-2xl col-span-3"
                    />
                  </div>
                </div>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="bio" className="text-right">
                      Bio
                    </Label>
                    <input
                      type="bio"
                      value={input.bio}
                      onChange={changeEventHandler}
                      id="bio"
                      name="bio"
                      className="w-full border border-gray-700 rounded-2xl col-span-3"
                    />
                  </div>
                  <div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="phone" className="text-right">
                        Skill
                      </Label>
                      <input
                        type="text"
                        id="skills"
                        onChange={changeEventHandler}
                        name="skills"
                        value={input.skills}
                        className="w-full border border-gray-700 rounded-2xl col-span-3"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="file" className="text-right">
                      Resume
                    </Label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      accept="application/pdf"
                      onChange={FileChangeHandler}
                      className="col-span-3 border border-gray-300 rounded-md p-2 bg-blue-600 "
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                {loading ? (
                  <Button className="w-full my-4">
                    {" "}
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait{" "}
                  </Button>
                ) : (
                  <Button type="submit" className="w-full my-4">
                    Save
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditProfile;
