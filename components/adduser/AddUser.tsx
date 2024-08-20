"use client"
import { Button } from "../ui/button";
import {addNewUserFormControls} from '../../utils/index'
import {
  Dialog,
  DialogContent,

  DialogFooter,
  DialogHeader,
  DialogTitle,
 
} from "@/components/ui/dialog"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
const AddUser = () => {
  const [openpop, setOpenpop] = useState(false)
  return (
    <><Button onClick={() => {
      setOpenpop(true)
    }}>Add New User</Button>
    
    <Dialog open={openpop} onOpenChange={setOpenpop}>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ADD USER</DialogTitle>
       
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">

            {addNewUserFormControls.map ((controlItem) => (
              <div className=" mt-3" key={controlItem.name}>
   <Label htmlFor={controlItem.name} className="text-right">
          {controlItem.label}
            </Label>
            <Input
               id={controlItem.name}
               name={controlItem.name}
               placeholder={controlItem.placeholder}
               className="col-span-3"
               type={controlItem.type}
            />
              </div>
            ))}
         
           
          </div>
    
        </div>
        <DialogFooter>
          <Button type="submit">Save </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog></>
  )
}

export default AddUser
