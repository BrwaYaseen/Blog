import React from "react";
import { toast } from "react-hot-toast";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@/utils/uploadthing";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadButton
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0]?.url);
      }}
      onUploadError={(error: Error) => {
        toast.error(`${error?.message}`);
      }}
    />
  );
};

export default FileUpload;
