type Protocol = {
  protocol: "http" | "https";
};
type Port = {
  port: 3000 | 3001;
};
type Role = {
  role: string;
};
type ConfigServer = Protocol & Port & Role;

const serverConfig: ConfigServer = {
  protocol: "https",
  port: 3000,
  role: "admin",
};

type PropsFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  role: string
) => string;

const startNewServer: PropsFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  role: string = "user"
): "serverStart" => {
  console.log(`Server started on ${protocol}://server:${port}, role: ${role}`);
  return "serverStart";
};

startNewServer(serverConfig.protocol, serverConfig.port, serverConfig.role);

// ============================================= interface
interface IProtocol {
  protocol: "http" | "https";
}
interface IPort {
  port: 3000 | 3001;
}
interface IRole {
  role: string;
}

interface IServerConfig extends IProtocol, IPort, IRole {}

const serverNewConfig: IServerConfig = {
  protocol: "http",
  port: 3000,
  role: "admin",
};
