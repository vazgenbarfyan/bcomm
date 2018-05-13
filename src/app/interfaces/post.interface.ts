interface IPost {
  _id: string;
  title: string;
  body: string;
  isVoted: boolean;
  votes: number;
  meeting: {date: string, info: string};
  accepted: boolean;
}
