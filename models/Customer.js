import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    chat_id: {
      type: String,
      required: false,
    },
    threads_id: {
      type: String,
      required: false,
    },
    telegram_name: {
      type: String,
      required: false,
    },
    messages: [
      {
        role: { type: String, required: false },
        content: { type: String, required: false },
      },
    ],
    full_name: { type: String, required: false },
    gender: { type: String, required: false },
    phone_number: {
      code: { type: String, default: "+995" },
      flag: { type: String, default: "ge" },
      number: { type: String, required: false },
    },
    WDYAHAU: {
      type: String,
      enum: ["fb", "instagram", "other", ""], // Add other options as needed
      required: false,
    },
    status: { type: String, default: "pending", required: false },
    national_ID_number: { type: String, required: false },
    connection_dates: [{ type: Date }], // Array of dates
    template_tour: { type: Boolean, default: false },
    note: { type: String },
    operator_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    allocator_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Customer = mongoose.model("Customer", CustomerSchema);
