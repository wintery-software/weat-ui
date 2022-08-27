type ContainerProps = {
  children: any;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
};

const Container = (props: ContainerProps) => (
  <div className={`container${props.size ? `-${props.size}` : ''}`}>{props.children}</div>
);

export default Container;
