type GreetingProps = {
  name: string;
};

export default function greeting({ name }: GreetingProps) {
  return name;
  //return <h1>Hello, {name}!</h1>;
}
