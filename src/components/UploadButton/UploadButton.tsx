import { ChangeEvent, useCallback, useRef } from 'react';

type Props = {
  onChange?: (event: ChangeEvent) => void;
  onClick?: () => void;
};

export const UploadButton = ({ onClick, onChange }: Props): JSX.Element => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onClickImageUpload = useCallback(() => {
    inputFileRef.current.click();

    if (onClick !== undefined) {
      onClick();
    }
  }, [onClick]);

  const onChangeImageUpload = useCallback(
    (event: ChangeEvent) => {
      if (onChange !== undefined) {
        onChange(event);
      }
    },
    [onChange],
  );

  return (
    <>
      <button type="button" className="absolute top-0 right-0" onClick={onClickImageUpload}>
        Upload image
      </button>
      <input
        className="hidden"
        ref={inputFileRef}
        type="file"
        accept="image/*"
        onChange={onChangeImageUpload}
        multiple
      />
    </>
  );
};
