
import { User, UserDocument } from "./user.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  async upserAuthUser(
    input : {
        clerkUserId: string;
        email : string;
        name: string
    }
  ){
    const now = new Date();
    //findByIdAndUpdate Antn
    return this.userModel.findOneAndUpdate({
        clerkUserId : input.clerkUserId
    },{
        $set:{
            email : input.email,
            name : input.name,
            lastSeenAt : now
        },
        $setOnInsert:{
            role : 'user'
        }
        
    },
    {
        new : true,
        upsert: true,
        setDefaultsOnInsert : true
    }
    )
  }

  async findByClerkUserId(clerkUserId:string){
    return this.userModel.findOne({clerkUserId});
  }
}