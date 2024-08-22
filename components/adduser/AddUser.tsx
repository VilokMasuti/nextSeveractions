"use client";

import { Button } from "../ui/button";
import { addNewUserFormControls, addNewUserFormInitialState } from "../../utils/index";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

import { addNewUserAction, editedUserAction } from "../../actions/index";
import { useContext, } from "react";
import { UserContext } from "../../Context/index";
const AddUser = () => {
  const userContext = useContext(UserContext);
  console.log(userContext); // Check if it's null or undefined
  
  const {
    openPopup,
    setOpenPopup,
    addNewUserFormData,
    setAddNewUserFormData,
    currentEditedID,
    setCurrentEditedID,
  } = userContext || {}; // Prevent destructuring error by providing a fallback
  console.log(addNewUserFormData);

  const handleSaveButtonValid = () => {
    return Object.keys(addNewUserFormData).every((key) => addNewUserFormData[key].trim() !== "");
  };

  const handleAddNewUserAction = async (event) => {
    event.preventDefault();
    const res =
      currentEditedID !== null ? await editedUserAction(currentEditedID, addNewUserFormData, "/user-management") : await addNewUserAction(addNewUserFormData, "/user-management");
    console.log(res);
    setOpenPopup(false);
    setAddNewUserFormData(addNewUserFormInitialState);
    setCurrentEditedID(null);

 
  };

  return (
    <>
      <Button onClick={() => setOpenPopup(true)}>Add New User</Button>

      <Dialog open={openPopup}

        onOpenChange={() => {
          setOpenPopup(false);
          setAddNewUserFormData(addNewUserFormInitialState);
          setCurrentEditedID(null);
        }}

      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>    {currentEditedID !== null ? "Edit User" : "Add New User"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <form onSubmit={handleAddNewUserAction}>
              {addNewUserFormControls.map((controlItem) => (
                <div className="mt-3" key={controlItem.name}>
                  <Label htmlFor={controlItem.name} className="text-right">
                    {controlItem.label}
                  </Label>
                  <Input
                    id={controlItem.name}
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    className="col-span-3"
                    type={controlItem.type}
                    value={addNewUserFormData[controlItem.name]}
                    onChange={(event) => {
                      setAddNewUserFormData({
                        ...addNewUserFormData,
                        [controlItem.name]: event.target.value,
                      });
                    }}
                  />
                </div>
              ))}
              <DialogFooter>
                <Button
                  className="disabled:opacity-60"
                  disabled={!handleSaveButtonValid()}
                  type="submit"
                >
                  Save
                </Button>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddUser;
