module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('menu', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            lang: DataTypes.STRING,
            text: DataTypes.STRING,
            href: DataTypes.STRING,
        },
        {
            freezeTableName: true,
        }
    );

    return Menu;
}
