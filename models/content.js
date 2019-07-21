module.exports = (sequelize, DataTypes) => {
    const Content = sequelize.define('content', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            lang: DataTypes.STRING,
            section: DataTypes.STRING,
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
        },
        {
            freezeTableName: true,
        }
    );

    return Content;
}
