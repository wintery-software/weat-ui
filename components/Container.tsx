type ContainerProps = {
  children: any;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
};

export default (props: ContainerProps) => (
  <div className={`container${props.size ? `-${props.size}` : ''}`}>{props.children}</div>
);
