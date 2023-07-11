import userSchema from "../model";
export class helper {
  async createname(incoming: any): Promise<any> {
    console.log("incoming:- \t", incoming);
    const user = await userSchema.create({
      emailId: incoming.email,
      password: incoming?.password,
      first_name: incoming?.first_name,
      last_name: incoming?.last_name,
      phone_number: incoming?.phone_number,
      sid: incoming?.sid,
    });
    console.log("user:- \t", user);
    return user;
  }
}
// export default new helper();
