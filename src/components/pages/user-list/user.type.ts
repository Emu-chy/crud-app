
export interface userDataType {
    id: string,
    name: string,
    email: string,

}

export const defaultUserData: userDataType[] = [{
    id: new Date().toJSON().toString(),
    name: "Admin",
    email: "admin@gmail.com"
   
}];

export enum PageEnum {
    list,
    add,
    edit
  }