import { Button, Flex, Image, Input, Spinner } from '@chakra-ui/core';
import * as React from 'react';
import { useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { uploadToCloudinary } from '../common/Utils';

interface ImageUploadInputProps {
  images: string[];
  onUpload: (url: string, index: number) => void;
  removeImage: (index: number) => any;
}
const ImagesUploadInput: React.FC<ImageUploadInputProps> = (
  props: ImageUploadInputProps,
) => {
  const { images, onUpload, removeImage } = props;
  const firstFilled = images.length >= 1;
  return (
    <Flex alignItems="center">
      {firstFilled ? (
        <>
          {[0, 1].map((order) => {
            const imageUrl = images[order] || null;
            const isFilled = imageUrl !== null;
            return (
              <>
                {isFilled ? (
                  <Flex>
                    <AiOutlineClose onClick={() => removeImage(order)} />
                    <Image
                      src={imageUrl as string}
                      width={140}
                      height={140}
                      objectFit="contain"
                    />
                  </Flex>
                ) : (
                  <UplodButton
                    onChange={(url) => onUpload(url, order)}
                    label="Pick Image"
                  />
                )}
              </>
            );
          })}
        </>
      ) : (
        <UplodButton onChange={(url) => onUpload(url, 0)} label="Pick Image" />
      )}
    </Flex>
  );
};

export default ImagesUploadInput;
interface UploadButtonProps {
  onChange: (fileRemotePath: string) => any;
  label: string;
}
const UplodButton = (props: UploadButtonProps) => {
  const { onChange, label } = props;
  // const [_, setToast] = useToasts();
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Input
        type="file"
        ref={fileInputRef}
        display="none"
        width={0}
        height={0}
        multiple={false}
        pointerEvents="none"
        onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(' i am bad ');
          if (e.target.files?.length === 1) {
            try {
              const selectedFile = e.target.files[0];
              setLoading(true);
              const imageUrl = await uploadToCloudinary(selectedFile);
              onChange(imageUrl);
            } catch (error) {
              // setToast({
              //   text: 'Error occured while uploading image',
              //   type: 'error',
              // });
            } finally {
              setLoading(false);
            }
          }
          return null;
        }}
      />
      <Button
        variant="ghost"
        height={40}
        mx={2}
        _hover={{
          cursor: loading ? 'wait' : 'default',
        }}
        isDisabled={loading}
        onClick={() => {
          if (fileInputRef.current !== null) {
            fileInputRef.current.click();
          }
        }}
      >
        {loading ? <Spinner width="60px" color="gray.600" /> : <>{label}</>}
      </Button>
    </>
  );
};
