import mongoose ,{ Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        owner: [
            {
                type:Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        videoFile: {
            type: String,//cloudiary url
            required: true,
        },
        thumbnail: {
            type: String,//cloudiary url
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const User = mongoose.model("Video", videoSchema)