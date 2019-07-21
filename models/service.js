module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define('service', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            lang:
            DataTypes.STRING,
            title: DataTypes.STRING,
            content:
                {
                    type: DataTypes.TEXT,
                    allowNull:
                        false
                }
            ,
            icon:
            DataTypes.STRING,
            sort:
            DataTypes.INTEGER

        },
        {
            freezeTableName: true,
        }
        )
    ;

    return Service;
}
