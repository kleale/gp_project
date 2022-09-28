import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum UserRole {
  Unset = "-",
  Administrator = "Администратор",
}

export interface OrganizationUser {
  fio: string;
  role: UserRole;
  email: string;
}

interface OrganizationUsersState {
  users: Array<OrganizationUser>;
}

const testUsers: Array<OrganizationUser> = [
  { fio: "Иванов Иван Иванович", role: UserRole.Administrator, email: "ivanov@yandex.ru" },
  { fio: "Михайлов Михаил Михайлович", role: UserRole.Unset, email: "mihaol@yandex.ru" },
  { fio: "Витальев Виталий Витальевич", role: UserRole.Unset, email: "vitaliy@yandex.ru" },
];

const initialState: OrganizationUsersState = {
  users: testUsers,
};

export const organizationUsersSlice = createSlice({
  name: "OrganizationUsers",
  initialState,
  reducers: {
    setUsers(state: OrganizationUsersState, action: PayloadAction<Array<OrganizationUser>>) {
      state.users = [...action.payload];
    },
  },
});

export default organizationUsersSlice.reducer;
