import { Types } from 'mongoose';

export class DoctorDo {
  _id: Types.ObjectId;
  email: string;
  reg_token: string;
  photo_avatar: string;
  phone: string;
  name: string;
  type: string;
  spec: string;
  free: boolean;
  appointments_accepted: string[];

  constructor(props: Partial<DoctorDo>) {
    this._id = props._id;
    this.email = props.email || null;
    this.reg_token = props.reg_token || null;
    this.photo_avatar = props.photo_avatar || null;
    this.phone = props.phone || null;
    this.name = props.name || null;
    this.type = props.type || null;
    this.spec = props.spec || null;
    this.free = props.free || null;
    this.appointments_accepted = props.appointments_accepted || null;
  }
}
