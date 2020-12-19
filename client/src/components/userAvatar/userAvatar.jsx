import { useEffect, useState } from "react";
import styles from "./userAvatar.module.scss";
import { Snackbar } from "../snackbar";
import defaultAvatar from "../../assets/images/avatar.png";
import { ReactComponent as EditIcon } from "../../assets/images/edit.svg";
import { usersService } from "../../services/users.service";
import filesApi from "../../api/files.api";

export function UserAvatar({ style, avatarURL, edit = false }) {
  const [imageURL, setImageURL] = useState(avatarURL);

  useEffect(() => {
    setImageURL(avatarURL);
  }, [avatarURL]);

  const postUserAvatar = async (file) => {
    const response = await filesApi.postUserAvatar(file);
    if (!response.ok) return;

    Snackbar.show("Image correctly uploaded !", "success");
    setImageURL(response.url);
    usersService.setUser();
  };

  const selectFile = () => {
    if (!document.getElementById("file")) return;

    document.getElementById("file").click();
  };

  const onChange = (e) => {
    postUserAvatar(e.target.files[0]);
  };

  return (
    <div className={`${style} ${styles.avatar}`}>
      {imageURL && <img src={imageURL} alt="avatar" onClick={(e) => selectFile(e)} />}
      {!imageURL && <img src={defaultAvatar} alt="Default avatar" onClick={(e) => selectFile(e)} />}

      {edit && (
        <>
          <input type="file" id="file" hidden={true} onChange={onChange} accept=".jpg" />
          <EditIcon />
        </>
      )}
    </div>
  );
}
