import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database"): Promise<Connection> => {
  const defaultOption = await getConnectionOptions();
  return createConnection(
    Object.assign(defaultOption, {
      host,
    })
  );
};
