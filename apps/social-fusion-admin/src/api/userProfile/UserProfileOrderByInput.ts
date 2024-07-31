import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  bio?: SortOrder;
  coverPhoto?: SortOrder;
  createdAt?: SortOrder;
  friends?: SortOrder;
  id?: SortOrder;
  personalInformation?: SortOrder;
  privacySettings?: SortOrder;
  profilePicture?: SortOrder;
  updatedAt?: SortOrder;
};
