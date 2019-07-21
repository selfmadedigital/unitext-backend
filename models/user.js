module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            token: DataTypes.STRING
        },
        {
            freezeTableName: true,
        }
    );

    return User;
}
