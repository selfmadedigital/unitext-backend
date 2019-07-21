module.exports = (sequelize, DataTypes) => {
    const Partner = sequelize.define('partner', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            image: DataTypes.STRING,
            href: DataTypes.STRING,
            sort: DataTypes.INTEGER
        },
        {
            freezeTableName: true,
        }
    );

    return Partner;
}
